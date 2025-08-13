'use strict'






async function getData(segment) {
    fetch(`https://jsonplaceholder.typicode.com/${segment}`)

    .then(response => {
      if(response.status >= 200 && response.status < 300){
        return response.json()
      }else {
        throw new Error(`HTTP status is out of range 200–299, status: ${response.status}`);
      }
    })

    .then(json => console.log('getMethod >', json))
    .catch(error => console.log(error))

}





async function postData(segment, data) {
  try{

    const response = await fetch(`https://jsonplaceholder.typicode.com/${segment}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if(response.status < 200 || response.status > 300){
    throw new Error(`HTTP request failed to post, status: ${response.status}`)
  }

  const result = await response.json()
  console.log('postMethod >', result)
  }
  catch(error){
    console.log('Failed to post', error)
  }
}





async function putData(id, data) {
  try{
     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
     })
    
    if(response.status < 200 || response.status > 300){
      throw new Error(`HTTP request failed to put, status: ${response.status}`)
    }

    const result = await response.json()
    console.log('putMethod >', result)
    
  }
  catch(error){
    console.error('something went wrong')
  }
}





async function patchData(id, data) {
  try{
     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
     })
    
    if(response.status < 200 || response.status > 300){
      throw new Error(`HTTP request failed to patch, status: ${response.status}`)
    }

    const result = await response.json()
    console.log('patchMethod >', result)
    
  }
  catch(error){
    console.error('something went wrong')
  }
}




async function deleteData(id) {
  try{
     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      method: 'DELETE'
     })
    if(response.status < 200 || response.status > 300){
      throw new Error(`HTTP request failed to delete, status: ${response.status}`)
    }

    const result = await response.json()
    console.log('deleteMethod >', result, `succesful delete by index: ${id}` )
    
  }
  catch(error){
    console.error('something went wrong')
  }
}




async function lauchFunctions(){
  await getData('posts/1')

  await postData('posts', {
  title: 'My post',
  body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  userId: '1'
  })

  await putData(1, {
  title: 'My post',
  body: 'dsaasdsadasdasdasdasddsadadaddasssssssss',
  userId: 1
  })

  await patchData(1, {
  title: 'Changed title by PATCH',
  body: 'dsaasdsadasdasdasdasddsadadaddasssssssss',
  userId: 1
  })
  
  await deleteData(1)

  
}

lauchFunctions()