import TagNewPage from '../../page-object/TagNewPage';
import TagListPage from '../../page-object/TagListPage';

describe('Gestión de Tags - Crear Tag con limite de frontera en slug', function() {
    const tagNewPage = new TagNewPage();
    const tagListPage = new TagListPage();

    it.only('Crear Tag con limite de frontera en slug', function() {

        const dataPool = this.dataPool;
        //cy.log(JSON.stringify(dataPool));

        tagNewPage.visit();

        let bigSlug = dataPool.tag[0].slug;

        [...Array(5)].forEach(() => {
            bigSlug = bigSlug + bigSlug;
          });

        const tagData = {
            name: '#' + dataPool.tag[0].name, //Tags que empiezan con # son internal
            color: dataPool.tag[0].accent_color.slice(1), 
            slug: bigSlug,
            description: dataPool.tag[0].description,
            image: {name: 'tigre-test.jpg', type: 'image/jpeg'}
        };

        // Crear un nuevo tag
        tagNewPage.createTag(tagData);
        cy.wait(1000); //Mienrtas la imagen es subida

        //Guardar datos del nuevo tag
        tagNewPage.saveCreateTag();

        //Revisar validaciones son correctas para el slug
        tagNewPage.invalidTagData([
            'URL cannot be longer than 191 characters' //Validación  de texto excediendo longitud
        ], false);
    });
});