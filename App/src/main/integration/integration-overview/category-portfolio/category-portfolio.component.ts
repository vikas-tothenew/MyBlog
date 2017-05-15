import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChildren, QueryList } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'ng2-webstorage';
import { ItemPreviewComponent } from './item-preview/item-preview.component';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  selector: 'cw-category-portfolio',
  templateUrl: 'category-portfolio.component.html',
  styleUrls: ['category-portfolio.component.scss']
})
export class CategoryPortfolioComponent implements OnInit, OnChanges { 
  
    @Input()
    private data: any;

    private categories:any;
    private items:any;
    private selectedCat:number;
    
    @ViewChildren(ItemPreviewComponent) itemPreviewComponents: QueryList<ItemPreviewComponent>;
  
    constructor(private storage:LocalStorageService){
      
    }

    ngOnInit() {
        this.selectedCat = this.storage.retrieve('selectedCat');
        if(!this.selectedCat || isNaN(this.selectedCat)){
            this.selectedCat = 0;
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['data']) {
            this.categories = this.processCategory(this.data);
        }
    }


    processCategory(data: any):any{
        if (!data) return;
        
        let _temp = new Array<any>();
        let _this = this;

        const categories = new Set(data.map(function(category){
            if(_this.selectedCat == category.categoryId){
                category.active = true;
            }else{
                category.active = false;
            }
            for(let item of category.integrations){
                item.catId = category.categoryId;
                _temp.push(item);
            }
            return category;
        }));
        
        _temp.sort(this.sortByName);
        this.items = _temp;
        return categories;
    }
  
    sortByName(a,b):any{
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    }
    
    selectCategory(id:number):void{
        let _temp = this.selectedCat;
        for(let cat of this.data) {
          if(cat.categoryId == id && !cat.active){
              cat.active = true;
              this.selectedCat = cat.categoryId;
          }else if(cat.active){
            cat.active = false;
          }
        }
        //No change on the 'this.selectedCat' means that this category is unselected
        if(this.selectedCat == _temp){
            this.selectedCat = 0;
        }
        this.storage.store('selectedCat',this.selectedCat);
    }
}