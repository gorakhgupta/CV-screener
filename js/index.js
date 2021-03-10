console.log('CV');
//array of objects
const data=[
{
    name:'Rohan das',
    age:19,
    city:'Kolkata',
    language:'python',
    framework:'Django',
    image:'https://randomuser.me/api/portraits/men/75.jpg'
},
{
    name:'Gorakh',
    age:20,
    city:'GKP',
    language:'JAVA',
    framework:'Node.JS',
    image:'https://randomuser.me/api/portraits/men/65.jpg'
},
{
    name:'Kartikey',
    age:19,
    city:'UP',
    language:'python',
    framework:'Django',
    image:'https://randomuser.me/api/portraits/men/15.jpg'
},
{
    name:'Asutosh Verma',
    age:20,
    city:'Lucknow',
    language:'Simulator',
    framework:'ECE',
    image:'https://randomuser.me/api/portraits/men/12.jpg'
},
{
    name:'Mahi Verma',
    age:20,
    city:'Varanasi',
    language:'python',
    framework:'Django',
    image:'https://randomuser.me/api/portraits/women/11.jpg'
},
{
    name:'Tushar Jain',
    age:19,
    city:'x',
    language:'python',
    framework:'Django',
    image:'https://randomuser.me/api/portraits/men/20.jpg'
},
{
    name:'Saheb Kumar',
    age:19,
    city:'Bihar',
    language:'python',
    framework:'Django',
    image:'https://randomuser.me/api/portraits/men/11.jpg'
}


]




//CV Iterator
function cvIterator(profiles){
    let nextIdx=0;
    return {
next:function(){
    return nextIdx < profiles.length? 
    {value:profiles[nextIdx++],done:false}:
    {done:true}
}


    };
}
const next=document.getElementById('next');
next.addEventListener('click',nextCv);
const candidates=cvIterator(data);
nextCv();
function nextCv(){
    const currentCandidate = candidates.next().value;
    let image=document.getElementById('image');
    let profile=document.getElementById('profile');
    if(currentCandidate!=undefined){
   image.innerHTML=`<img src='${currentCandidate.image}'> `
   profile.innerHTML=`
   <ul class="list-group">
  <li class="list-group-item">Name: ${currentCandidate.name}</li>
  <li class="list-group-item">Age: ${currentCandidate.age}</li>
  <li class="list-group-item">City: ${currentCandidate.city}</li>
  <li class="list-group-item">Language: ${currentCandidate.language}</li>
  <li class="list-group-item">FrameWork: ${currentCandidate.framework}</li>
  
</ul>
   `
    }
    else
    {alert('End Of Candidates Application');
    location.reload();
}
}