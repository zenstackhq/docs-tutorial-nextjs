/* eslint-disable */
const metadata = {
    models: {
        content: {
            name: 'Content', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, published: {
                    name: "published",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, author: {
                    name: "author",
                    type: "User",
                    isDataModel: true,
                    backLink: 'content',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "authorId" },
                }, authorId: {
                    name: "authorId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'author',
                }, contentType: {
                    name: "contentType",
                    type: "String",
                }, likes: {
                    name: "likes",
                    type: "Like",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'content',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            , discriminator: "contentType",
        }
        ,
        post: {
            name: 'Post', baseTypes: ['Content'], fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                    inheritedFrom: "Content",
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                    inheritedFrom: "Content",
                }, published: {
                    name: "published",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                    inheritedFrom: "Content",
                }, author: {
                    name: "author",
                    type: "User",
                    isDataModel: true,
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "authorId" },
                    inheritedFrom: "Content",
                }, authorId: {
                    name: "authorId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'author',
                    inheritedFrom: "Content",
                }, contentType: {
                    name: "contentType",
                    type: "String",
                    inheritedFrom: "Content",
                }, likes: {
                    name: "likes",
                    type: "Like",
                    isDataModel: true,
                    isArray: true,
                    isRelationOwner: true,
                    inheritedFrom: "Content",
                }, title: {
                    name: "title",
                    type: "String",
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        image: {
            name: 'Image', baseTypes: ['Content'], fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                    inheritedFrom: "Content",
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                    inheritedFrom: "Content",
                }, published: {
                    name: "published",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                    inheritedFrom: "Content",
                }, author: {
                    name: "author",
                    type: "User",
                    isDataModel: true,
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "authorId" },
                    inheritedFrom: "Content",
                }, authorId: {
                    name: "authorId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'author',
                    inheritedFrom: "Content",
                }, contentType: {
                    name: "contentType",
                    type: "String",
                    inheritedFrom: "Content",
                }, likes: {
                    name: "likes",
                    type: "Like",
                    isDataModel: true,
                    isArray: true,
                    isRelationOwner: true,
                    inheritedFrom: "Content",
                }, url: {
                    name: "url",
                    type: "String",
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        like: {
            name: 'Like', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, author: {
                    name: "author",
                    type: "User",
                    isDataModel: true,
                    backLink: 'likes',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "authorId" },
                }, authorId: {
                    name: "authorId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'author',
                }, content: {
                    name: "content",
                    type: "Content",
                    isDataModel: true,
                    backLink: 'likes',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "contentId" },
                }, contentId: {
                    name: "contentId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'content',
                },
            }
            , uniqueConstraints: {
                authorId_contentId: {
                    name: "authorId_contentId",
                    fields: ["authorId", "contentId"]
                }, id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        account: {
            name: 'Account', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, userId: {
                    name: "userId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'user',
                }, type: {
                    name: "type",
                    type: "String",
                }, provider: {
                    name: "provider",
                    type: "String",
                }, providerAccountId: {
                    name: "providerAccountId",
                    type: "String",
                }, refresh_token: {
                    name: "refresh_token",
                    type: "String",
                    isOptional: true,
                }, access_token: {
                    name: "access_token",
                    type: "String",
                    isOptional: true,
                }, expires_at: {
                    name: "expires_at",
                    type: "Int",
                    isOptional: true,
                }, token_type: {
                    name: "token_type",
                    type: "String",
                    isOptional: true,
                }, scope: {
                    name: "scope",
                    type: "String",
                    isOptional: true,
                }, id_token: {
                    name: "id_token",
                    type: "String",
                    isOptional: true,
                }, session_state: {
                    name: "session_state",
                    type: "String",
                    isOptional: true,
                }, user: {
                    name: "user",
                    type: "User",
                    isDataModel: true,
                    backLink: 'accounts',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
                },
            }
            , uniqueConstraints: {
                provider_providerAccountId: {
                    name: "provider_providerAccountId",
                    fields: ["provider", "providerAccountId"]
                }, id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        session: {
            name: 'Session', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, sessionToken: {
                    name: "sessionToken",
                    type: "String",
                }, userId: {
                    name: "userId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'user',
                }, expires: {
                    name: "expires",
                    type: "DateTime",
                }, user: {
                    name: "user",
                    type: "User",
                    isDataModel: true,
                    backLink: 'sessions',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, sessionToken: {
                    name: "sessionToken",
                    fields: ["sessionToken"]
                },
            }
            ,
        }
        ,
        user: {
            name: 'User', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, name: {
                    name: "name",
                    type: "String",
                    isOptional: true,
                }, email: {
                    name: "email",
                    type: "String",
                    isOptional: true,
                }, emailVerified: {
                    name: "emailVerified",
                    type: "DateTime",
                    isOptional: true,
                }, password: {
                    name: "password",
                    type: "String",
                }, accounts: {
                    name: "accounts",
                    type: "Account",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'user',
                }, sessions: {
                    name: "sessions",
                    type: "Session",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'user',
                }, content: {
                    name: "content",
                    type: "Content",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'author',
                }, likes: {
                    name: "likes",
                    type: "Like",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'author',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, email: {
                    name: "email",
                    fields: ["email"]
                },
            }
            ,
        }
        ,
        verificationToken: {
            name: 'VerificationToken', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, identifier: {
                    name: "identifier",
                    type: "String",
                }, token: {
                    name: "token",
                    type: "String",
                }, expires: {
                    name: "expires",
                    type: "DateTime",
                },
            }
            , uniqueConstraints: {
                identifier_token: {
                    name: "identifier_token",
                    fields: ["identifier", "token"]
                }, id: {
                    name: "id",
                    fields: ["id"]
                }, token: {
                    name: "token",
                    fields: ["token"]
                },
            }
            ,
        }
        ,
    }
    ,
    deleteCascade: {
        user: ['Account', 'Session'],
    }
    ,
    authModel: 'User'
};
export default metadata;
