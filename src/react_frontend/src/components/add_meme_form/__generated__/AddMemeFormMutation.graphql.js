/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateMemeInput = {|
  image?: ?string,
  title?: ?string,
  clientMutationId?: ?string,
|};
export type AddMemeFormMutationVariables = {|
  input: CreateMemeInput
|};
export type AddMemeFormMutationResponse = {|
  +createMeme: ?{|
    +meme: ?{|
      +image: string,
      +title: string,
    |}
  |}
|};
export type AddMemeFormMutation = {|
  variables: AddMemeFormMutationVariables,
  response: AddMemeFormMutationResponse,
|};
*/


/*
mutation AddMemeFormMutation(
  $input: CreateMemeInput!
) {
  createMeme(input: $input) {
    meme {
      image
      title
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "image",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddMemeFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateMemePayload",
        "kind": "LinkedField",
        "name": "createMeme",
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
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddMemeFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateMemePayload",
        "kind": "LinkedField",
        "name": "createMeme",
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
              (v2/*: any*/),
              (v3/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "4cbfa106e8559f31e5f89e5efaec688f",
    "id": null,
    "metadata": {},
    "name": "AddMemeFormMutation",
    "operationKind": "mutation",
    "text": "mutation AddMemeFormMutation(\n  $input: CreateMemeInput!\n) {\n  createMeme(input: $input) {\n    meme {\n      image\n      title\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8814be4ff6d22b4f7cbd360d7b798613';

module.exports = node;
