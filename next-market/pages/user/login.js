import { useState } from "react"
import Head from "next/head"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
/*ステータスの初期化:useState フックを使用して、email と password の2つのステート変数を初期化しています。これらのステート変数は、フォームの入力値を管理します。*/
    const handleSubmit = async(e) => {  
        e.preventDefault()
/*e.preventDefault() は、デフォルトのフォーム送信動作をキャンセルし、ページがリロードされないようにします。通常、フォームが送信されるとページが再読み込みされるため、このメソッドはフォームのデフォルト動作を停止します。*/
        try{
            const response = await fetch("http://localhost:3000/api/user/login", {    
                method: "POST",
                headers: { 
                    "Accept": "application/json", 
                    "Content-Type": "application/json"
                },
/*"Accept" ヘッダーは、サーバーにJSON形式のデータを受け入れることを伝えます。
"Content-Type" ヘッダーは、送信するデータがJSON形式であることを示します。*/
                body: JSON.stringify({
                    email: email,
                    password: password
                })
/*body にはフォームで入力されたemailとpasswordをJSON形式で送信しています。*/
            })
            const jsonData = await response.json() 
            localStorage.setItem("token", jsonData.token)
            alert(jsonData.message)  
        }catch(err){
            alert("ログイン失敗") 
        }
    }

    return (
        <div>
            <Head><title>ログイン</title></Head>
            <h1 className="page-title">ログイン</h1>
            <form onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="email" placeholder="メールアドレス" required/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" name="password" placeholder="パスワード" required/>
                <button>ログイン</button>
            </form>

        </div>
    )
}

export default Login
