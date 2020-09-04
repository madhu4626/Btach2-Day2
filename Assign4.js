//Program to display only elements containing 'a' in them from a array

let arr = ["Apple", "Banana", "cut", "Dog","Eagle"];
for(let i =0;i<=arr.length;i++)
{
      if(arr[i].includes('a') == true)
      {
          console.log(arr[i]);
          continue;
      }
      
}