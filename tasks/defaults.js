//Defaults options
module.exports = {
  branch : '',
  //[G]ithub [B]itbucket supported at the momment
  repo_url: '',
  version_name : '',
  file: 'CHANGELOG.md',
  app_name : 'My app - Changelog',
  tag: null,
  logo : null,
  intro : null,
  debug: false,
  template: 'templates/template.md',
  changelogrc : '.changelogrc',
  sections: [
    {
      title: 'Bug Fixes',
      grep: '^fix'
    },
    {
      title: 'Features',
      grep: '^feat'
    },
    {
      title: 'Documentation',
      grep: '^docs'
    },
    {
      title: 'Breaking changes',
      grep: 'BREAKING'
    },
    {
      title: 'Refactor',
      grep: '^refactor'
    },
    {
      title: 'Style',
      grep: '^style'
    },
    {
      title: 'Test',
      grep: '^test'
    },
    {
      title: 'Chore',
      grep: '^chore'
    }
  ]

};
