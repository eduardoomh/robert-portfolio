
export type ControllerResponse<T> =
	| {
			code: number;
			res: T;
	  }
	| {
			code: number;
			error: {
				msg: string;
			};
	  };
    

export interface EmailValuesI{
    name: string;
    email: string;
    phone: string;
    message: string;
}

export const sendEmail = async (values: EmailValuesI):Promise<ControllerResponse<any>> => {
    try{
        const response = await fetch(`${import.meta.env.PUBLIC_API_URL}/api/sendEmail`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...values,
            }),
          });
    
        const result = await response.json();

        if (!result.success || result.code !== 200) {
            return {
              code: 500,
              error: {
                msg: 'Error sending the email'
              }
            }
          }

        return{
            code: 200,
            res: values
        }
    }catch(error: any){
        console.log(error)
        return{
            code: 500,
            error: {
                msg: error?.response?.data || 'Error'
            }
        }
    }
}