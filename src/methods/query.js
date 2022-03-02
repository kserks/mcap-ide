export default function (body){
  return new Promise((resolve, reject)=>{
        try {
            window.mcefQuery({
              request: body,
              persistent: true,
              onSuccess: function (response){

                  //let data = JSON.parse(response).data;

                  resolve( JSON.parse(response) );
              }
            })

        } 
        catch (err) {
            reject(JSON.parse(err));
        }

  })
}