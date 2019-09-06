import * as React from "react"

export default {
  p: (props: any) => <p className={"md-p"} {...props} />,
  h1: (props: any) => <h1 className={"md-h1"} {...props} />,
  h2: (props: any) => <h2 className={"md-h2"} {...props} />,
  h3: (props: any) => <h3 className={"md-h3"} {...props} />,
  h4: (props: any) => <h4 className={"md-h4"} {...props} />,
  h5: (props: any) => <h5 className={"md-h5"} {...props} />,
  h6: (props: any) => <h6 className={"md-h6"} {...props} />,
  blockquote: (props: any) => (
    <blockquote className={"md-blockquote"} {...props} />
  ),
  ul: (props: any) => <ul className={"md-ul"} {...props} />,
  ol: (props: any) => <ol className={"md-ol"} {...props} />,
  li: (props: any) => <li className={"md-li"} {...props} />,
  table: (props: any) => <table className={"md-table"} {...props} />,
  tr: (props: any) => <tr className={"md-tr"} {...props} />,
  td: (props: any) => <td className={"md-td"} {...props} />,
  th: (props: any) => <th className={"md-th"} {...props} />,
  pre: (props: any) => <pre className={"md-pre"} {...props} />,
  code: (props: any) => <code className={"md-code"} {...props} />,
  em: (props: any) => <em className={"md-em"} {...props} />,
  strong: (props: any) => <strong className={"md-strong"} {...props} />,
  hr: (props: any) => <hr className={"md-hr"} {...props} />,
  a: (props: any) => <a className={"md-a"} {...props} />,
  img: (props: any) => <img className={"md-img"} {...props} />,
}
