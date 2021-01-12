import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
addMatchImageSnapshotCommand({
    customSnapshotsDir: '/tests/e2e/snapshots',
    failureThreshold: 0.01,
});

Cypress.Commands.add('checkUI', name => {
    cy.wait(1500);
    cy.matchImageSnapshot(name);
});
