const SHARP_o = require( 'sharp' )

exports.handler = async event => {
  //const subject = event.queryStringParameters.name || 'World'
  const sharp_o = SHARP_o
  const status_s =
   `Sharp status: ${sharp_o ? 'OK 😀' : 'FAIL 😡'}`
  return {
    statusCode: 200,
    body: `${status_s}`
  }
}