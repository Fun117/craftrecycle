# リサイクルレシピ解放本のレシピを全員に付与
recipe give @a craftrecycle:a_craftcycle_knowledge_book

# リサイクルレシピを全員から剥奪
function craftrecycle:recipe/lock

# ロード完了メッセージの送信
tellraw @a [{"text": "\nCraft Recycle","bold":true},{"text": " > "},{"text": "successfully datapack load", "color": "green"},{"text": "\n"}]