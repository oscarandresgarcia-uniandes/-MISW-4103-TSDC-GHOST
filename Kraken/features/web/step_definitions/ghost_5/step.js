const { When, Then } = require('@cucumber/cucumber');


//login
When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});
When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});
When('I click next', async function() {
    let element = await this.driver.$('#ember5');
    return await element.click();
})
//Fin Login

/// Funcionalidades de post 

//Click post
When('I click post', async function() {
    let element = await this.driver.$('[data-test-nav="posts"]');
    return await element.click();
})

//Click new_post
When('I click new_post', async function() {
    let element = await this.driver.$('[data-test-new-post-button]');
    return await element.click();
})
//Completar campo titulo de new post
When('I enter title_post {string}', async function (title_post) {
    let element = await this.driver.$('[data-test-editor-title-input]');
    return await element.setValue(title_post);
});
//Click new_post
When('I click new_description_post', async function() {
    let element = await this.driver.$('[contenteditable="true"]');
    return await element.click();
    })
//Completar campo descripcion de new post
When('I enter description_post {string}', async function (description_post) {
    let element = await this.driver.$('[data-koenig-dnd-droppable="true"]');
    element.keys(['Control', 'a']);
    element.keys(['Backspace']);
    return await element.setValue(description_post);
});
//Regresar en new post 
When('I click return_new_post', async function() {
    let element = await this.driver.$('[data-test-link="posts"]');
    return await element.click();
})
//Guardar en new post 
When('I click save_new_post', async function() {
    let element = await this.driver.$('[data-test-button="publish-flow"]');
    return await element.click();
})
//Confirmar en new post 
When('I click confirm_new_post', async function() {
    let element = await this.driver.$('[data-test-button="continue"]');
    return await element.click();
})
//Confirmar en new post 
When('I click reconfirm_new_post', async function() {
    let element = await this.driver.$('[data-test-task-button-state="idle"]');
    return await element.click();
})
//Back to post 
When('I click back_to_post', async function() {
    let element = await this.driver.$('[data-test-button="back-to-editor"]');
    return await element.click();
})
// Opciones de publicacion post 
When('I click options_new_post', async function() {
    let element = await this.driver.$('[data-test-psm-trigger]');
    return await element.click();
})
// Agregar fecha de publicacion post 
When('I click options_schedule_new_post', async function() {
    let element = await this.driver.$('[data-test-date-time-picker-date-input]');
    return await element.click();
})
//Completar campo fecha de publicacion post
When('I enter schedule_new_post {string}', async function (schedule_new_post) {
    let element = await this.driver.$('[placeholder="YYYY-MM-DD"]');
    return await element.setValue(schedule_new_post);
});
//Editar post
When('I click edite_post', async function() {
    let element = await this.driver.$('[title="Go to Editor"]');
    return await element.click();
})

//seleccionar post post
When('I click select_post', async function() {
    let element = await this.driver.$('.ember-view.permalink.gh-list-data.gh-post-list-title');
    return await element.click();
})
// Eliminar post 
When('I click delete_post', async function() {
    let element = await this.driver.$('#entry-controls > div > div.settings-menu-content > div > button');
    return await element.click();
})
// Confirmacion Eliminar post 
When('I click confirm_delete_post', async function() {
    let element = await this.driver.$('[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
    return await element.click();
})



//Click members 
When('I click members', async function() {
    let element = await this.driver.$('[data-test-nav="members"]');
    return await element.click();
}) 
//Click  buscar members 
When('I enter search_member {string}', async function (search_member) {
    let element = await this.driver.$('#members-search');
    return await element.setValue(search_member);
});
//Click  new members 
When('I click new_member', async function() {
    let element = await this.driver.$('a[data-test-new-member-button="true"]');
    return await element.click();
})
//Completar campo nombre de new members
When('I enter name_member {string}', async function (name_member) {
    let element = await this.driver.$('#member-name');
    return await element.setValue(name_member);
});
//Completar email nombre de new members
When('I enter email_member {string}', async function (email_member) {
    let element = await this.driver.$('#member-email');
    return await element.setValue(email_member);
});
//Completar campo nota de new members
When('I enter note_member {string}', async function (note_member) {
    let element = await this.driver.$('#member-note');
    return await element.setValue(note_member);
});
//guardar nuevo miembro 
When('I click save_member', async function() {
    let element = await this.driver.$('[data-test-button="save"]');
    return await element.click();
})

//Click editar members 
When('I click edit_members', async function() {
    let element = await this.driver.$('[data-test-list="members-list-item"]');
    return await element.click();
}) 
//Click eliminar members 
When('I click delete_members', async function() {
    let element = await this.driver.$('[data-test-button="member-actions"]');
    return await element.click();
}) 
//Click confirmar eliminar members 
When('I click confirm_delete_members', async function() {
    let element = await this.driver.$('[data-test-button="delete-member"]');
    return await element.click();
}) 
//Click  re confirmar eliminar members 
When('I click reconfirm_delete_members', async function() {
    let element = await this.driver.$('[data-test-button="confirm"]');
    return await element.click();
}) 



//Click dashboard
When('I click dashboard', async function() {
    let element = await this.driver.$('[data-test-nav="dashboard"]');
    return await element.click();
})

//Click site
When('I click site', async function() {
    let element = await this.driver.$('[data-test-nav="site"]');
    return await element.click();
})





//Click tags
When('I click tags', async function() {
    let element = await this.driver.$('[data-test-nav="tags"]');
    return await element.click();
})
//Crear nuevo tag
When('I click new_tags', async function() {
    let element = await this.driver.$('[class="ember-view gh-btn gh-btn-primary"]');
    return await element.click();
})
//Crear nuevo nombre de tag  
When('I enter name_tag {string}', async function (name_tag) {
    let element = await this.driver.$('#tag-name');
    return await element.setValue(name_tag);
});
//Crear nueva descripcion de tag  
When('I enter description_tag {string}', async function (description_tag) {
    let element = await this.driver.$('#tag-description');
    return await element.setValue(description_tag);
});
//Crear nuevo slug de tag  
When('I enter slug_tag {string}', async function (slug_tag) {
    let element = await this.driver.$('#tag-slug');
    return await element.setValue(slug_tag);
});
//guardar tag
When('I click save_tags', async function() {
    let element = await this.driver.$('[data-test-task-button-state="idle"]');
    return await element.click();
})
//regresar a tags 
When('I click return_tags', async function() {
    let element = await this.driver.$('[data-test-link="tags-back"]');
    return await element.click();
})
//retry tags
When('I click retry_tags', async function() {
    let element = await this.driver.$('[data-test-task-button-state="failure"]');
    return await element.click();
})
//editar tag
When('I click editar_tags', async function() {
    let element = await this.driver.$('[class="gh-list-row gh-tags-list-item"]');
    return await element.click();
})

//Eliminar tag
When('I click delete_tags', async function() {
    let element = await this.driver.$('[data-test-button="delete-tag"]');
    return await element.click();
})

When('I click redelete_tags', async function() {
    let element = await this.driver.$('[data-test-button="confirm"]');
    return await element.click();
})



//Click pages
When('I click pages', async function() {
    let element = await this.driver.$('[data-test-nav="pages"]');
    return await element.click();
})
//Click new_pages
When('I click new_pages', async function() {
    let element = await this.driver.$('[data-test-new-page-button]');
    return await element.click();
})
//Completar campo titulo de pages
When('I enter title_pages {string}', async function (title_pages) {
    let element = await this.driver.$('[data-test-editor-title-input]');
    return await element.setValue(title_pages);
});
//Click new_pages descripcion
When('I click new_description_pages', async function() {
    let element = await this.driver.$('[contenteditable="true"]');
    return await element.click();
    })
//Completar campo descripcion de new pages
When('I enter description_pages {string}', async function (description_pages) {
    let element = await this.driver.$('[data-koenig-dnd-droppable="true"]');
    element.keys(['Control', 'a']);
    element.keys(['Backspace']);
    return await element.setValue(description_pages);
});
//Regresar en new pages 
When('I click return_new_pages', async function() {
    let element = await this.driver.$('[data-test-link="pages"]');
    return await element.click();
})
//Guardar en new pages 
When('I click save_new_pages', async function() {
    let element = await this.driver.$('[data-test-button="publish-flow"]');
    return await element.click();
})
//Confirmar en new pages
When('I click confirm_new_pages', async function() {
    let element = await this.driver.$('[data-test-button="continue"]');
    return await element.click();
})
//Confirmar en new pages
When('I click reconfirm_new_pages', async function() {
    let element = await this.driver.$('[data-test-task-button-state="idle"]');
    return await element.click();
})
// Opciones de publicacion pages 
When('I click options_new_pages', async function() {
    let element = await this.driver.$('[data-test-psm-trigger]');
    return await element.click();
})
// Agregar fecha de publicacion pages 
When('I click options_schedule_new_pages', async function() {
    let element = await this.driver.$('[data-test-date-time-picker-date-input]');
    return await element.click();
})
//Completar campo fecha de publicacion pages
When('I enter schedule_new_pages {string}', async function (schedule_new_pages) {
    let element = await this.driver.$('[placeholder="YYYY-MM-DD"]');
    return await element.setValue(schedule_new_pages);
});
//Regresar al editor de pages 
When('I click back_to_pages', async function() {
    let element = await this.driver.$('[data-test-button="back-to-editor"]');
    return await element.click();
})
//Regresar al editor de pages 
When('I click edite_pages', async function() {
    let element = await this.driver.$('[title="Go to Editor"]');
    return await element.click();
})

//Update pages 
When('I click update_pages', async function() {
    let element = await this.driver.$('[data-test-button="publish-save"]');
    return await element.click();
})
// Eliminar page 
When('I click delete_page', async function() {
    let element = await this.driver.$('#entry-controls > div > div.settings-menu-content > div > button');
    return await element.click();
})
// Confirmacion Eliminar page
When('I click confirm_delete_page', async function() {
    let element = await this.driver.$('[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
    return await element.click();
})
// volver a estado draft 
When('I click confirm_draft_page', async function() {
    let element = await this.driver.$('[class="gh-btn gh-btn-editor darkgrey gh-unpublish-trigger"]');
    return await element.click();
})
//confirmacion draft 
When('I click reconfirm_draft_page', async function() {
    let element = await this.driver.$('[class="gh-revert-to-draft"]');
    return await element.click();
})


//asignar tag a post 
When('I click set_tag', async function() {
    let element = await this.driver.$('[class="ember-power-select-trigger-multiple-input"]');
    return await element.click();
})

//seleccionar tag a post 
When('I click select_tag', async function() {
    let element = await this.driver.$('[class="ember-power-select-option"]');
    return await element.click();
})

//ver tag publico 
When('I click ver_tag_publico', async function() {
    let element = await this.driver.$('[class="gh-btn gh-btn-group-selected"]');
    return await element.click();
})


//ver tag privado 
When('I click ver_tag_privado', async function() {
    let element = await this.driver.$('[class="gh-btn "]');
    return await element.click();
})