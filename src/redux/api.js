import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const treeApi = createApi({
    reducerPath: "treeApi",
    refetchOnFocus: true,
    tagTypes: ["Nodes"],
    baseQuery: fetchBaseQuery({ baseUrl: "https://test.vmarmysh.com/" }),
    endpoints: (build) => ({
        getTree: build.query({
            query: () => "api.user.tree.get?treeName=67c0abb9-dcb9-4360-9eb2-d9e344b9f42c",
            providesTags: ["Nodes"]
        }),
        addNode: build.mutation({
            query: (data) => ({
                url: `api.user.tree.node.create?treeName=67c0abb9-dcb9-4360-9eb2-d9e344b9f42c&parentNodeId=${data.id}&nodeName=${data.nodeName}`,
                method: "POST"
            }),
            invalidatesTags: ["Nodes"]
        }),
        deleteNode: build.mutation({
            query: (id) => ({
                url: `api.user.tree.node.delete?treeName=67c0abb9-dcb9-4360-9eb2-d9e344b9f42c&nodeId=${id}`,
                method: "POST"
            }),
            invalidatesTags: ["Nodes"]
        }),
        renameNode: build.mutation({
            query: (data) => ({
                url: `api.user.tree.node.rename?treeName=67c0abb9-dcb9-4360-9eb2-d9e344b9f42c&nodeId=${data.id}&newNodeName=${data.nodeName}`,
                method: "POST"
            }),
            invalidatesTags: ["Nodes"]
        })
    })
});

export const { useGetTreeQuery, useAddNodeMutation, useDeleteNodeMutation, useRenameNodeMutation } = treeApi;