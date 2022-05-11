
const root = document.getElementById('root')
let anAction = document.getElementById('reply')


anAction.addEventListener('keyup', checkReply);

function checkReply(){
    let replyButtons = document.querySelectorAll('.replyn');
   
    replyButtons.forEach(btn=>{
         if(anAction.value === '' || anAction.value === undefined || anAction.value === null){
        btn.disabled = true
    }else{
        btn.disabled = false
    }
    })
   
}



function createPost(text){
    let postNumber = root.childElementCount+1

    let post = document.createElement('div');
    post.setAttribute('id', `p${postNumber}`);

    let p = document.createElement('p')
    p.setAttribute('class','post');
    p.innerHTML = text
    let replyContainer = document.createElement('div');
    replyContainer.setAttribute('class','reply')
    replyContainer.setAttribute('id', `rP${postNumber}`)

    // replyContainer.setAttribute('class','reply')
    // replyContainer.setAttribute('id', `r${id.id}R${replyNumber}`)
    // replyButton.setAttribute('onclick', `Reply(r${id.id}R${replyNumber})`)
    // replyButton.setAttribute('class','replyn')
    // replyButton.disabled = true;
    // replyButton.innerText = "Reply"

    let replyButton = document.createElement('button');

    replyButton.setAttribute('class','replyn')
    replyButton.setAttribute('onclick', `Reply(rP${postNumber})`)
    replyButton.disabled=true;
    replyButton.innerText = "Reply"


    p.append(replyButton)
    post.append(p, replyContainer)

    return post
}

function createReply(id,text){
    let replyNumber = id.childElementCount+1
    let reply = document.createElement('div');

    reply.setAttribute('id', `${id.id}R${replyNumber}`);

    let p = document.createElement('p')
    p.setAttribute('class','rPost');
    p.innerHTML = text

    let replyButton = document.createElement('button');
    let replyContainer = document.createElement('div'); 

    replyContainer.setAttribute('class','reply')
    replyContainer.setAttribute('id', `r${id.id}R${replyNumber}`)
    replyButton.setAttribute('onclick', `Reply(r${id.id}R${replyNumber})`)
    replyButton.setAttribute('class','replyn')
    replyButton.disabled = true;
    replyButton.innerText = "Reply"


    p.append(replyButton)
    reply.append(p, replyContainer)
    return reply
}

function Post(){
    let input = document.getElementById('post');
    let post = createPost(input.value);

    root.insertBefore(post, root.children[0]);
    input.value = '';
    checkReply()
    input.focus();
}

function Reply(id){
    let input = document.getElementById('reply');
    let reply = createReply(id,input.value);

    id.append(reply);
    input.value = '';
    checkReply()
    input.focus();
}

function getRandomColor(num=10) {
    
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random()* +num *16)];
    }
  }