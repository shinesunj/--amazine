

class Request {
     baseUrl = "https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine";
    getData({url,method='GET',data={}}){
        return new Promise((resolve,reject) =>{
            wx.request({
                url: this.baseUrl + url,
                data: data,
                // header: {'content-type':'application/json'},
                method: 'GET',
                // responseType: 'text',
                success: (result)=>{
                    if(result.data.code == 0){
                        resolve(result.data.data)
                    }else{
                        this._showError()
                    }
                  
                },
                fail: (err)=>{
                    reject(err)
                    this.showError();
                },
                complete: ()=>{}
            });
        })
    }
    _showError(){
        wx.showToast({
            title: '请求错误',
            icon: 'none',
            image: '',
            duration: 1500,
            mask: false,
            success: (result)=>{
                
            },
            fail: ()=>{},
            complete: ()=>{}
        });
    }
}

export {Request}