import { Octokit } from "octokit";

// instantiate octocit login using PAT
const octokit = new Octokit({ auth: `YOUR_PAT` });

// get username of the user logged in
const {
  data: { login },
} = await octokit.rest.users.getAuthenticated();
console.log("Hello, %s", login);

// create an issue in a repo
// const issues = await octokit.request("POST /repos/{owner}/{repo}/issues", {
// await octokit.request("POST /repos/{owner}/{repo}/issues", {
//     owner: "lawmeskiviahs",
//     repo: "helloGhapi",
//     title: "issue returns",
//     body: "I created this issue using Octokit!",
//   });
//   console.log(issues.data);

// fetch list of issues in a repo
// const issues = await octokit.rest.issues.listForRepo({
//     owner: "lawmeskiviahs",
//     repo: "helloGhapi",
//     // per_page: 2 // pagination
//   });
//console.log(issues)

// using the response from the request
// const response = await octokit.request("GET /repos/{owner}/{repo}/issues/{issue_number}", {
//     owner: "lawmeskiviahs",
//     repo: "helloGhapi",
//     issue_number: 1,
//   });
  
// //   console.log(`The status of the response is: ${response.status}`)
// //   console.log(`The request URL was: ${response.url}`)
// //   console.log(`The x-ratelimit-remaining response header is: ${response.headers["x-ratelimit-remaining"]}`)
//   console.log(`The issue body is: ${response.data.body}`)
 
// get PRs to a repo
// const response = await octokit.request('GET /repos/{owner}/{repo}/pulls', {
//     owner: 'lawmeskiviahs',
//     repo: 'helloGhapi',
//   })
// console.log(response)

// // get PR by number to a repo
// const response = await octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}', {
//     owner: 'lawmeskiviahs',
//     repo: 'helloGhapi',
//     pull_number: '7',
//   })
// console.log(response)

// merge a PR on a repo
// const response = await octokit.request('PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge', {
//     owner: 'lawmeskiviahs',
//     repo: 'helloGhapi',
//     pull_number: '6',
//   })
// console.log(response)

// get comments on a PR
// const response = await octokit.request('GET /repos/{owner}/{repo}/issues/comments', {
//     owner: 'lawmeskiviahs',
//     repo: 'helloGhapi',
//     per_page: 5,
//   })
// console.log(response)

// update a comment on a pr
// const response = await octokit.request('PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}', {
//     owner: 'lawmeskiviahs',
//     repo: 'helloGhapi',
//     comment_id: '1544070408',
//     body: 'This comment is updated using octakit',
//   })

// add a comment on a pr
// const response = await octokit.request('POST /repos/{owner}/{repo}/issues/{issue_number}/comments', {
//     owner: 'lawmeskiviahs',
//     repo: 'helloGhapi',
//     issue_number: '7',
//     body: 'this was created using octokit',
//   })
// console.log(response)