import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import {ProductsComponent} from './products/products.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ReservationComponent} from './reservation/reservation.component';
import {MenuComponent} from './menu.component';
import {CampaignDetailComponent} from './campaign-detail/campaign-detail.component';

const routes: Routes = [
    {
        path: '',
        component: MenuComponent,
        children: [
            {
                path: '',
                component: CategoriesComponent,
            },
            {
                path: 'reservation',
                component: ReservationComponent,
            },
            {
                path: 'kampanyalar/:campaign',
                component: CampaignDetailComponent
            },
            {
                path: ':category/:product',
                component: ProductDetailComponent,
            },
            {
                path: ':category',
                component: ProductsComponent,
            }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MenuRoutingModule {
}
