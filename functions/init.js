const JIM_o = require( 'jimp' )  //: trying with Jimp as Sharp can't be bundled by Webpack

exports.handler =
  async event =>
  {
    //~~const param_s = event.queryStringParameters.param_s
    const jimp_s =
      JIM_o
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