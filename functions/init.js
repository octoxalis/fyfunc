const SHA_o = require( 'sharp' )

exports.handler =
  async event =>
  {
    //~~const param_s = event.queryStringParameters.param_s
    const sharp_s =
      SHA_o
        ?
        'OK 😀'
        :
        'FAIL 😡'
    const body_s =
     `sharp status: ${sharp_s}`
    return (
      {
        statusCode: 200,
        body: `${body_s}`
      }
    )
}