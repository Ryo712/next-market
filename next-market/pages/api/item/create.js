import connectDB from "../../../utils/database"
import { ItemModel } from "../../../utils/schemaModels"
import auth from "../../../utils/auth"

const createItem = async(req, res) => {
    try{
    await connectDB()
    return res.status(200).json({message: "アイテム作成成功"})
    }catch(err){
    return res.status(400).json({message: "アイテム作成失敗"})
    }
}

export default auth(createItem)