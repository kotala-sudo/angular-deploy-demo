import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocationList: HousingLocation[] = [];
  // Injecting HousingService into the Component
  housingService: HousingService = inject(HousingService);

  filteredLocationList: HousingLocation[] = [];

  constructor(){
    //setting housingLocationlist to the data array in HousingService
      this.housingLocationList = this.housingService.getAllHousingLocations();
    //setting initial filteredLocationList to the housingLoationList.
      this.filteredLocationList = this.housingLocationList;
  }

  //method to filter the housinglocations based on the search term.
  filterResults(text:string){
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}

  // readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  // housingLocation: HousingLocation = {
  //   id: 9999,
  //   name: 'Test Home',
  //   city: 'Test city',
  //   state: 'ST',
  //   photo: `${this.baseUrl}/example-house.jpg`,
  //   availableUnits: 99,
  //   wifi: true,
  //   laundry: false,
//   };
// }

