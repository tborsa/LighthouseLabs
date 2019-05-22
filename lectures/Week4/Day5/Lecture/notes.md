# User Authentication

What have we done so far?

In Tinyapp?

---

## How have we stored passwords/sensitie data?🤫
 hashes
 best practices for managing passwords.

---

## How have we authenticated someone?👌
 cookies, 
 sessions, 
 encryption

---

### Authentification vs Authorization

__Authentification__
- confirming your identity
- proving your a specific user

__Authorization__
- granting access
- veryfing that you have the correct access to can see/get something

---

## Encoded vs Encrypted 📡
__Encoded:__  transforms data into another format using a scheme that is somewhat available so that it can easily be reversed.
Purpose to transfomr data to a usable stae. 

__Encryption:__ transforms data into another format in such a way that only specific individual(s) can reverse the transformation.
Purpose to obscure the data. 

---

How Encryption?

---

# 65/86/7564?

<h1 class="fragment" style="color: green">Date: 10/31/2019 👻 🎃</h1>

--

# Time: 6:52am?

<h1 class="fragment" style="color: green">Time: 1:07am</h1>

--

# e92 k9NDy?

<h1 class="fragment" style="color: green">e47 k4NDy 🍬</h1>

---

This is a Cipher


0   1   2   3   4

↕   ↕   ↕   ↕   ↕
 
5   6   7   8   9  

Example: 74 -> 29

We used an adaptation of rot 13.

---

## rot13


problems?
- Can eventually see the pattern is predictable over time
- Need to communicate how to use rot13 securely 
if someone intercepts the rot13 explanation then your
encryption doesent work. 

--

# vulnerablilities 👺👻👿👾
 
- in transit 🚃
    - packet sniffing 👃
    - spoofing
- Data breach
    - physical data breach
    - brute force
- willingly given up
    - social engineering
    - Physhing
- Impersonation

--

# Case:

Bob and Alice have just launched their new start-up, a web app stringCan🥫™.  

stringCan🥫™ is a messaging app created to send secret/confidential messages from one person to another. 

During testing they find that some of their secret messages have appeared online. After some investigation they find that sneaky Eve is using a packet sniffer to intecept their sent data.  

--

## Solution: 

encryption

but how do we encrypt?

--

### Keys? 🔑

A key is usually a random string that is used with encryption algoritms to encrypt data. 

encryption_algoritm + Data + Key => Encrypted data

the encryption algoritm is created in such a way that you need to know the encryption algorithm and the key that was used in order to decrypt the data. 

encryption_algorithm + encrypted_data + key => data


The key makes it so I can uniquel lock (encrypt) and unlock (decrypt) data.7


If I want someone else to be able to read the encrypted data I am sending I need to pass them the key.
But how do I securely pass the key?

---

## Diffie helman key exchange

Method of securely exchanging or passing a key. 


--

# CASE:

After implementing encryption on stringCan messages, Alice recieves the following message from Bob.

```
Bob: "Hey Alice, quick question. What was the name of 
the high school you attended? Good job on the 
encryption BTW! Also Sarah and i were just talking 
and we coulden't recall your mothers maiden name?" 
```
trustful Alice responds with.

```java
Alice: "Hey Bob, weird question but it was Harry Herpson 
Highschool. The encryption was hard but now sneaky eve 
wont get our info. Oh and tell Sarah it was Smith." 
```
Later while talking with Bob in person she brings up the conversation, and Bob doesen't know what she is talking about. 

Further investigation reveals that sneaky Eve has struck again and was spoofing Bob's IP to initiate a fake key exchange and send fake messages. 

--

## Solution

By encrypting the messages Bob and Alice were able to ensure that all conversations were secret. 
But they were not able to ensure that they knew who the secret conversation was with.

You can have
- Secret conversation with someone who you don't know who they are

- Public conversation where you know for sure who they are.

- secrect conversation where you know who the person is. 

## public private keys


Alice has a private and public key


Bob has a private and public key

Works like a locked mailbox. 
The public "key" is like the location of the mailbox.
The private "key: is the key to unlock your mailbox.
Ensures only you recieve the message. 

RSA is an example of encryption with public/private keys.

But this still doesn't authenticate who sent the message. 

---

## Signing/Certificates

Used to confirm  (authenticate) the identity of someone. 

Bob:👨
Alice: 👩

public key: 🔑 
private key: 🗝

First:  
Publickey🔑 + RSA + Message📨 => Encryption🔐      
PrivateKey🗝 + RSA + Encryption🔐 => Message📨

But also:  
PrivateKey🗝 + RSA + Message📨 => Encryption🔏     
Publickey🔑  + RSA + Encryption🔏 => Message📨

---

So if Alice wants to send a secure message so that Bob knows that it was her who sent it she...

1st: Creates a signature "Alice" and encrypts it with her __private__🗝 key


👩🗝 + "Alice"  => 👩🔏(Signature)     

2nd: Writes her note and appends the Signature to the end of the note. Then encrypts both with Bob's pubic key and sends it to Bob.

👨🔑 + (📨 + 👩🔏(Signature)) => 👨🔐(📨 + 👩🔏(Signature))

---

Then Bob...

1st: Decrypts the whole incomming using his private key. To get Alice's note and signature. 

👨🔐(📨 + 👩🔏(Signature)) + 👨🗝 => (📨 + 👩🔏(Signature))

---

2nd:  Bob uses Alice's public key to decrypt her signature.

👩🔏(Signature) + 👩🔑 => Signature

If the Signature reads "Alice" then Bob knows that Alice did send the message, beause only Alice could encrypt the signature (with her private key) so that her public key would successfully decrypt it.

--

# CASE:
Fresh off of implementing RSA security, Alice and Bob get news that their database has been breached by Eve using the information she got from Alice. However,this time they think they are prepared. They don't store any message history in their DB and all of their user passwords have been hashed. 
They breath a sigh of relief...
Later Bob checks his banking app and sees that he has sent 100$ to Eve! Remembering that he used the same password for both stringCan🥫™ and his online banking he realizes that Eve has somehow decrypted the hashed passwords, but how?

--

### Hash Tables
what do you think the most common passwords are?
- make a list
- show password breach
- compare breach to our list
- see if we can find someones password
    -example activity where 
    show a hash 

--

```
password            md5 hash
----------------------------------------------------
password            5f4dcc3b5aa765d61d8327deb882cf99


```










<p class="fragment">email: bob@gmail.com, <br>  password: d8578edf8458ce06fbc5bb76a58c5ca4 </p>

--

## SOlUTION:
use a salt

--

# CASE:
After putting out a notice for users to refresh thier passwords, and adding a salt. Bob has a frustrated call with his bank over how easy it was for Eve to take his money. He doesn't want it to be that easy for someone to log into stringCan even if they have a correct password what can he do? 

---

## Solution: 

### Two (multi) factor authentification

- something you know
- something you have
- something you are


## Single Sign-on
- sign on with fb, github, google 
- benefits?
- cons?

passport middleware for singlesignon authentication.
