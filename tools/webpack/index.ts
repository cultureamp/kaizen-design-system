import { RuleSetRule } from "webpack"

export const rules: RuleSetRule[] = [
  {
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: ["@babel/preset-typescript", "@babel/preset-react"],
        },
      },
    ],
  },
]
