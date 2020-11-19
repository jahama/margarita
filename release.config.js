module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      'semantic-release-slack-bot',
      {
        packageName: 'margarita',
        notifyOnSuccess: true,
        notifyOnFail: true,
        markdownReleaseNotes: true,
        onSuccessTemplate: {
          text: 'Margarita v$npm_package_version released! $release_notes',
        },
      },
    ],
  ],
}
