const arr:Array<string> = ["do","dung ngu","duy ngu"];
const arrNum: number[]=[1,2,3];
const arr2: Array<Array<number>>= [[1,2,3],[4,5,6]];
// tuples
const typle : [string,string,number] = ['thi','dung',20];
enum ROLE {ADMIN, USER}
const role:ROLE = ROLE.ADMIN;
const role2:ROLE = ROLE.USER;
console.log(role);
console.log(role2);
enum STATUS_CODE {SUCCESS = 200, CLIENT_ERROR = 400}
const code:STATUS_CODE = STATUS_CODE.SUCCESS;
