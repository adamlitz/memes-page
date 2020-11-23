/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpVoteMemeInput = {|
  meme?: ?string,
  clientMutationId?: ?string,
|};
export type MemeUpvoteMutationVariables = {|
  input: UpVoteMemeInput
|};
export type MemeUpvoteMutationResponse = {|
  +upvoteMeme: ?{|
    +meme: ?{|
      +id: string
    |}
  |}
|};
export type MemeUpvoteMutation = {|
  variables: MemeUpvoteMutationVariables,
  response: MemeUpvoteMutationResponse,
|};
*/


/*
mutation MemeUpvoteMutation(
  $input: UpVoteMemeInput!
) {
  upvoteMeme(input: $input) {
    meme {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpVoteMemePayload",
    "kind": "LinkedField",
    "name": "upvoteMeme",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "MemeNode",
        "kind": "LinkedField",
        "name": "meme",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MemeUpvoteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MemeUpvoteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a01a26a595752dc27d0d2c2a0a4fd001",
    "id": null,
    "metadata": {},
    "name": "MemeUpvoteMutation",
    "operationKind": "mutation",
    "text": "mutation MemeUpvoteMutation(\n  $input: UpVoteMemeInput!\n) {\n  upvoteMeme(input: $input) {\n    meme {\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7659a53a67837312f29db47159eae786';

module.exports = node;
