const FS_o = require( 'fs-extra' )
const SHA_o = require( 'sharp' )

exports.handler =
  async event =>
  {
    //~~const param_s = event.queryStringParameters.param_s
    const fs_s =
      FS_o
        ?
        'OK 😀'
        :
        'FAIL 😡'
    const sharp_s =
      SHA_o
        ?
        'OK 😀'
        :
        'FAIL 😡'
    const body_s =
     `fs-extra status: ${fs_s}<br/>sharp status: ${sharp_s}`
    return (
      {
        statusCode: 200,
        body: `${body_s}`
      }
    )
}