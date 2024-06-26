import { js } from "@ast-grep/napi"

export const splitIntoFamilies = (code: string): any => {
  const sg = js.parse(code)
  const node = sg.root().find(js.kind("named_imports"))

  console.info("node", node?.text())

  const answer = node?.getMatch("A")

  if (answer) {
    console.info("answer", answer?.text())
    const edit = node?.replace("514")
    // const newCode = sg.root().commitEdits([edit])
    return "newCode"
  }
}
