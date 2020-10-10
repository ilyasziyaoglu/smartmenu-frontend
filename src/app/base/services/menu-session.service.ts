import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuSessionService {

  CURRENT_PROD = "@currProdMenu";
  CURRENT_CAMP = "@currCampMenu";
  CURRENT_CATEGORY = "@currCatMenu";

  constructor() { }

  setCurrentProduct(product) {
    sessionStorage.setItem(this.CURRENT_PROD, JSON.stringify(product));
  }

  getCurrentProduct() {
    let product = sessionStorage.getItem(this.CURRENT_PROD);
    if (product) return JSON.parse(product);
    return null;
  }

  setCurrentCampaign(campaign) {
    sessionStorage.setItem(this.CURRENT_CAMP, JSON.stringify(campaign));
  }

  getCurrentCampaign() {
    let campaign = sessionStorage.getItem(this.CURRENT_CAMP);
    if (campaign) return JSON.parse(campaign);
    return null;
  }

  setCurrentCategory(categoryId) {
    sessionStorage.setItem(this.CURRENT_CATEGORY, JSON.stringify(categoryId));
  }

  getCurrentCategory() {
    let categoryId = sessionStorage.getItem(this.CURRENT_CATEGORY);
    if (categoryId) return JSON.parse(categoryId);
    return null;
  }
}
