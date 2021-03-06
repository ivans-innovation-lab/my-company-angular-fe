// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  blogPostQueryBaseUrl: 'http://localhost:8080/api/blogposts',
  blogPostCommandBaseUrl: 'http://localhost:8080/api/blogpostcommands',
  projectsQueryBaseUrl: 'http://localhost:8080/api/projects',
  projectsCommandBaseUrl: 'http://localhost:8080/api/projectcommands',
  teamsQueryBaseUrl: 'http://localhost:8080/api/team',
  teamsCommandBaseUrl: 'http://localhost:8080/api/teamcommands',
  authTokenUrl: 'http://localhost:8080/oauth/token',
  usersBaseUrl: 'http://localhost:8080/api/users',
  rolesBaseUrl: 'http://localhost:8080/api/roles'
};
