module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "targets": "> 0.25%, not dead",
        "corejs": 3
      }
    ]
  ];

  const test_presets = [
    [
      "@babel/preset-env",
      {
        "targets": {"node": "current"}
      }
    ]
  ]

  const env = {
    test: {
      presets: test_presets
    }
  }

  return {
    presets,
    env
  };
}
