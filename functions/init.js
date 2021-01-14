const SHA_o = require( 'jimp' )

exports.handler =
  async event =>
  {
    //~~const param_s = event.queryStringParameters.param_s
    const jimp_s =
      SHA_o
        ?
        'OK 😀'
        :
        'FAIL 😡'
    const body_s =
     `jimp status: ${jimp_s}`
    return (
      {
        statusCode: 200,
        body: `${body_s}`
      }
    )
}