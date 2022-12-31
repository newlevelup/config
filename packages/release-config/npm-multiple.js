module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [{ type: 'test', release: 'patch' }]
      }
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@amanda-mitchell/semantic-release-npm-multiple',
      {
        registries: {
          github: {},
          public: {}
        }
      }
    ],
    '@semantic-release/github',
    [
      '@semantic-release/git',
      { message: `chore(release): \${nextRelease.gitTag} [skip ci]` }
    ]
  ]
}
