import { getElem } from './utilities/utils';

import {
    columnUrl,
    columnName,
    repositoriesTable,
} from './utilities/01RepositoriesTableselectors';

import {
    isCurrentClass,
    paginationLinkSelector,
    paginationNextBtnSelector,
    paginationListBtnSelector,
    paginationPreviousBtnSelector,
} from './utilities/buefy.selectors';

describe('01 repositories table', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('01-1 home overview', () => {
        getElem(columnUrl).should('be.visible');
        getElem(columnName).should('be.visible');
        getElem(repositoriesTable).should('be.visible');
    });

    it('01-02 Navigation', () => {
        cy.log('01-02a - Pagination button 2');
        getElem(paginationListBtnSelector)
            .find(paginationLinkSelector)
            .eq(1)
            .should('not.have.class', isCurrentClass);
        getElem(paginationListBtnSelector)
            .find(paginationLinkSelector)
            .eq(0)
            .should('have.class', isCurrentClass);

        getElem(paginationListBtnSelector)
            .find(paginationLinkSelector)
            .eq(1)
            .click();

        getElem(paginationListBtnSelector)
            .find(paginationLinkSelector)
            .eq(1)
            .should('have.class', isCurrentClass);
        getElem(paginationListBtnSelector)
            .find(paginationLinkSelector)
            .eq(0)
            .should('not.have.class', isCurrentClass);

        cy.log('01-02b - "Previous page" button');
        getElem(paginationPreviousBtnSelector).click();

        getElem(paginationListBtnSelector)
            .find(paginationLinkSelector)
            .eq(1)
            .should('not.have.class', isCurrentClass);
        getElem(paginationListBtnSelector)
            .find(paginationLinkSelector)
            .eq(0)
            .should('have.class', isCurrentClass);
        getElem(paginationPreviousBtnSelector).should(
            'have.attr',
            'disabled',
            'disabled'
        );

        cy.log('01-02c - "Next page" button');
        getElem(paginationNextBtnSelector).click();

        getElem(paginationListBtnSelector)
            .find(paginationLinkSelector)
            .eq(0)
            .should('not.have.class', isCurrentClass);
        getElem(paginationListBtnSelector)
            .find(paginationLinkSelector)
            .eq(1)
            .should('have.class', isCurrentClass);
    });
});
