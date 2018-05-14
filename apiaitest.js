//test call api.ai

  request_1.getAsync({
    url: activelink + '/testapiai',
    method: 'GET'
  }).then(function(res, err){

    console.log(res)
  })
