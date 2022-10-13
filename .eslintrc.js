module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    quotes: ["error", "double"], // 더블 쿼터 사용
    "@typescript-eslint/quotes": ["error", "double"], // 더블 쿼터 사용
    "no-unused-vars": "off", // 사용 안 한 변수 경고 중복
    "spaced-comment": "off", // 주석을 뒤에 쓰지 말라는 경고
    "@typescript-eslint/no-unused-vars": "warn", // 사용 안 한 변수는 경고
    "jsx-a11y/control-has-associated-label": "off", // 상호 작용하는 엘리먼트에 label을 넣는다.
    "react/no-array-index-key": "off", // key 값으로 index
    "comma-dangle": "off", // 마지막에 ,를 넣어주지 않는다.
    "arrow-body-style": "off", // 화살표 함수 안에 return을 사용할 수 있다.
    "react/no-unescaped-entities": "off", // 문자열 내에서 " ' > } 허용
    "react/prop-types": "off", // proptypes를 사용하지 않는다.
    "object/jsx-one-expression-per-line": "off", // { 다음 줄 바꿈을 강제로 사용하지 않는다.
    "react/jsx-one-expression-per-line": "off", // 한 라인에 여러 개의 JSX를 사용할 수 있다.
    "implicit-arrow-linebreak": "off", // 연산자 다음 줄 바꿈을 사용할 수 있다.
    "no-shadow": "off", // 파일 내에서 중복 이름을 사용할 수 있다.
    "operator-linebreak": "off", // 연산자 다음 줄 바꿈을 사용할 수 있다.
    "react/react-in-jsx-scope": "off", // jsx를 사용하여도 React를 꼭 import 하지 않아도 된다.
    "react/jsx-props-no-spreading": "off", // next js에서는 a에 href 없이 사용 가능
    "global-require": "off", // 함수 내에서 require 사용 가능
    "no-use-before-define": "off", // 선언전에 사용하지 말라,
    "import/prefer-default-export": "off", // export default 권장
    "no-param-reassign": "off", // param assign 하지 않기
    "jsx-a11y/label-has-associated-control": "off",
    "no-invalid-css": "off",
    "react/jsx-curly-newline": "off",
    indent: "off",
    "react/jsx-filename-extension": [
      1, { extensions: [".js", "jsx", ".tsx"] }, // jsx 사용 가능한 확장자 설정
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      }, // import 시 확장자명은 사용하지 않는다.
    ],
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
        },
      },
    },
  }
}
