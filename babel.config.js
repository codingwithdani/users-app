module.exports = api => {
  const isTest = api.env('test')
  if (isTest) {
    return {
      presets: [
        ['@babel/preset-env', { target: { node: 'current' } }],
        'babel/preset-react'
      ]
    }
  } else {
    return { presets: [['babel-preset-sui']] }
  }
}
