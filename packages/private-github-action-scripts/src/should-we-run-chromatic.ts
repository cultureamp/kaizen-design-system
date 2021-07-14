// This is a script called by .github/workflows/chromatic.yaml
// It is not intended for general usage.

import { Octokit } from "octokit"

const githubToken = process.env.GITHUB_TOKEN
const prNumber = process.env.PR_NUMBER
const ownerName = "cultureamp"
const repoName = "kaizen-design-system"

const octokit = new Octokit({ auth: githubToken })

const shouldWeRunChromatic = await determineIfWeShouldWeRunChromatic()

// setting an output to be consumed by chromatic.yml
// https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions#setting-an-output-parameter
console.log(`::set-output name=RESULT::${shouldWeRunChromatic}`)

// Implementation --------------------------------------------------------------

async function determineIfWeShouldWeRunChromatic() {
  const pr = await getPr({ ownerName, repoName, prNumber })

  const lastComment = await getLastComment(pr) // there will always be at least one comment as this action is triggered by PR comments

  return (
    (await belongsToOrg(lastComment.user, "cultureamp")) && // only allow cultureamp members to run chromatic
    containsRunChromaticInstruction(lastComment.body)
  )
}

async function getPr({ ownerName, repoName, prNumber }) {
  return (
    await octokit.rest.pulls.get({
      owner: ownerName,
      repo: repoName,
      pull_number: prNumber,
    })
  ).data
}

async function getLastComment(pr) {
  const commentsUrl = `${pr.comments_url}`
  const comments = await octokit.paginate(`GET ${commentsUrl}`, {
    // NOTE: the follow params have been commented out as they do not appear to do anything (despite being
    // documented in the API docs https://docs.github.com/en/rest/reference/issues#list-issue-comments-for-a-repository--parameters). So instead of sorting the results to get the last comment, we wastefully fetch *all* pages using paginate() and then get the last comment in code.
    // sort: "created",
    // direction: "desc",
  })
  return comments.pop()
}

async function belongsToOrg(user, org) {
  // NOTE: unfortunately there is no simple way to determine if the comment author
  // belongs to a (private) org, due to the nature of private organisations. We
  // must wastefully fetch a list of every user in the org (using the authenticated token),
  // and then manually find the user from the list. `paginate` automatically loads
  // each page, one at at time. `users/xxxx/orgs` only returns a list of public orgs a user
  // belongs to see https://docs.github.com/en/rest/reference/orgs#list-organizations-for-a-user
  const orgMembers = await octokit.paginate(`GET /orgs/${org}/members`, {
    per_page: "100",
  })

  return Boolean(orgMembers.find(member => member.login === user.login))
}

function containsRunChromaticInstruction(text) {
  return text.indexOf("run chromatic") !== -1
}
