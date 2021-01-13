const FS_o = require( 'fs-extra' )

exports.handler = async event => {
  //const subject = event.queryStringParameters.name || 'World'
  const status_s =
   `Sharp status: ${FS_o ? 'OK 😀' : 'FAIL 😡'}`
  return {
    statusCode: 200,
    body: `${status_s}`
  }
}