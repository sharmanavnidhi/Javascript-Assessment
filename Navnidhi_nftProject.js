/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const A = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _breed, _fur_color, _body) {
    const A_NFT = {//object A_NFT and its properties
        "name" : _name,
        "breed" : _breed,
        "fur_color" : _fur_color,
        "body" : _body
    }
    A.push(A_NFT);//adding NFT into the array A
    console.log("minted : "+ _name);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {//printing meta data of the NFTs
    console.log("\nThe NFTs are : ");
    for(let i = 0; i<A.length ; i++){
        console.log("\nSerial_no :\t"+(i+1));
        console.log("Name :\t\t" + A[i].name);
        console.log("Breed :\t\t" + A[i].breed);
        console.log("Fur_color :\t" + A[i].fur_color);
        console.log("Body :\t\t" + A[i].body);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs :" + A.length);// printing the total number of NFTs
}

// call your functions below this line
mintNFT("Cooper","Indie","Black","Lean");//NFT 1
mintNFT("Laddu","Labrador Retriever","Gold","Chubby");//NFT 2 
mintNFT("Brandy","Beagle","White","Short");//NFT 3 
mintNFT("bob","indie","black","muscular");
listNFTs();
getTotalSupply();
