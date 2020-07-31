DATABASE:

1. Admin
    - id (pk)
    - name (string)
    - username (string)
    - email (string)
    - password (string)
    - gender (string)
    - hp (string)

2. User
    - id (pk)
    - name (string)
    - username (string)
    - email (string)
    - password (string)
    - gender (string)
    - hp (string)

3. Product
    - id (pk)
    - Category (string)
    - name (string)
    - stock (int)
    - price (int)
    - AdminId (fk)

4. UserProduct
    - id (pk)
    - jumlahBarang (int)
    - hargaTotal (int)
    - ProductId
    - UserId

RELASI :
Admin ONE TO MANY Product
User MANY TO MANY Product = UserProduct