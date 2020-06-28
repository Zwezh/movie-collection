/* tslint:disable:no-unused-variable */

import {
    inject,
    TestBed
} from '@angular/core/testing';

import { WishesModelService } from './wishes-model.service';

describe('Service: MovieList', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [WishesModelService]
        });
    });

    it('should ...', inject([WishesModelService], (service: WishesModelService) => {
        expect(service).toBeTruthy();
    }));
});
