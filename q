                                       Table "public.account"
    Column    |          Type          | Collation | Nullable |               Default               
--------------+------------------------+-----------+----------+-------------------------------------
 id           | integer                |           | not null | nextval('account_id_seq'::regclass)
 account_type | boolean                |           | not null | 
 email        | character varying(120) |           | not null | 
 _password    | character varying(80)  |           | not null | 
 phone        | character varying(20)  |           |          | 
 name         | character varying(20)  |           | not null | 
 last_name    | character varying(30)  |           |          | 
 province     | character varying      |           | not null | 
 post_code    | character varying      |           | not null | 
 adress       | character varying      |           |          | 
 profile_foto | character varying      |           |          | 
 _is_active   | boolean                |           | not null | 
Indexes:
    "account_pkey" PRIMARY KEY, btree (id)
    "account_email_key" UNIQUE CONSTRAINT, btree (email)
Referenced by:
    TABLE "business" CONSTRAINT "business_account_id_fkey" FOREIGN KEY (account_id) REFERENCES account(id)
    TABLE "client" CONSTRAINT "client_account_id_fkey" FOREIGN KEY (account_id) REFERENCES account(id)
    TABLE "favourites" CONSTRAINT "favourites_client_id_fkey" FOREIGN KEY (client_id) REFERENCES account(id)

