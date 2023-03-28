import {Pipe,PipeTransform} from '@angular/core';
import { TouristSpot } from 'src/Models/touristspot';

@Pipe({
  name:'spotlocationfilterPipe'
})
export class spotlocationfilterPipe implements PipeTransform{
  transform(spots:TouristSpot[],spotname:string)
  {
    if(!spots||!spotname)
    {
      return spots;
    }
    return spots.filter(x=>(x.spotlocation.toLowerCase().indexOf(spotname.toLowerCase())!==-1 || x.spotname.toLowerCase().indexOf(spotname.toLowerCase())!==-1 || x.spotstate.toLowerCase().indexOf(spotname.toLowerCase())!==-1));
  }
}
// }
// @Pipe({
//   name:'purposefilterPipe'
// })
// export class purposefilterPipe implements PipeTransform{
//     transform(CPUs:TouristSpot[],searchterm:string)
//     {
//      if(!CPUs|| !searchterm)   
//    {
//        return CPUs;
//    }
//     return CPUs.filter((x=>x.purpose.toLowerCase().indexOf(searchterm.toLowerCase())!==-1));
//     }
//   }
// @Pipe({
//     name:'budgetfilterPipe'
//     })
//   export class budgetfilterPipe implements PipeTransform{
//     transform(CPUs:computer[],searchbudget:number)
//     {
//      if(!CPUs|| !searchbudget)   
//    {
//        return CPUs;
//    }
//     return CPUs.filter((x=>x.price<searchbudget));
//     }
//   }
