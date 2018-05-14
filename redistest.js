//test call redis 

  request_1.getAsync({
    url: activelink + '/testredis',
    method: 'GET'
  }).then(function(res, err){

    console.log(res)

      })