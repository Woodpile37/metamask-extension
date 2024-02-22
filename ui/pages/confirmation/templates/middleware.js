export const middleware = [ thunk ], mockApprovalId = 1, mockApproval = {
  id : mockApprovalId,
  origin : 'https://test-dapp.metamask.io',
  requestData : {
    rpcUrl : 'https://rpcurl.test.chain',
    rpcPrefs : {
      blockExplorerUrl : 'https://blockexplorer.test.chain',
    },
    chainName : 'Test chain',
    ticker : 'TST',
    chainId : '0x9999',
    nickname : 'Test chain',
  },
},
             mockBaseStore = {
               metamask : {
                 pendingApprovals : {
                   [mockApprovalId] : mockApproval,
                 },
                 approvalFlows : [ {id : mockApprovalId, loadingText : null} ],
                 subjectMetadata : {},
                 providerConfig : {
                   type : 'rpc',
                   rpcUrl : 'https:///example-custom-rpc.metamask.io',
                   chainId : '0x9999',
                   nickname : 'Test initial state',
                 },
                 selectedNetworkClientId : 'test-network-client-id',
                 networksMetadata : {
                   'test-network-client-id' : {
                     EIPS : {},
                     status : NetworkStatus.Available,
                   },
                 },
               },
             };
