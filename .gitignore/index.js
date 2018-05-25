const Discord = require('discord.js')
const bot = new Discord.Client()
//prefixe $
//message.channel.send /*reponds au message sans le nom de l'envoyeur*/
bot.on('guildMemberAdd',function (member){
	member.createDM().then(function(channel){
		return channel.send('Bienvenue à Liber noble voyageur. En attendant de pouvoir jouer, regardez toutes les infos sur : http://leschroniquesdeliber.fr/JDR. Ensuite poster votre fiche de personnage dans le channel #fiche-de-personnage' )
	})
})

bot.on('message',function (message){
	if(message.content==='Bonjour'){
		message.reply('Bonjour')
	}else if(message.content==='Ca va ?'){
		message.reply('Oui et toi ?')
	}else if(message.content==='J\'ai besoin d\'info'){
		var moderatorhelp =message.guild.roles.find('name', 'Chef de Clan');
		message.reply('Avec plaisir, demander au '+moderatorhelp+' ou sur http://leschroniquesdeliber.fr/JDR')
	}else if(message.content==='Merde' || message.content==='merde' ){
		message.reply('Restez poli(e)')
	}else if(message.content==='Ca va ?'){
		message.reply('Oui et toi ?')
	}else if(message.content==='Qui est le meilleur ?'){
		message.channel.send('Vharung est le plus grand des dieux !')
	}else if(message.content==='$commande'){
		message.reply('```\rBonjour\rCa va ?\rJ\'ai besoin d\'info\r$fiche\r$butin```')		
	}else if(message.content==='$butin'){
		var textgen ="```"; 
	    var items = ["Carotte (0.1kg)","Pomme (0.1kg)","Pomme de terre (0.1kg)","Pain (0.5kg)","Bouteille vide (0.1kg)","Coffre (5kg)","Echelle (12.5kg)","Equipement d'escalade (6kg)","Grappin (2kg)","Grimoire (1.5kg)","Huile contre créature magique (0.5kg)","Huile de force (0.5kg)","Pelle (2.5kg)","Menottes (3kg)","Torche (1kg)","Longue-vue (0.5kg)","Livre (2.5kg)","Loupe (0.1kg)","Lettre d'amour (0.11kg)","Poire (0.11kg)","Canne à péche (1kg)","Filet de peche (2kg)","Arme Cassée (2kg)","Armure brisée (10kg)","Bobine de fil (0.1kg)","Fourrure (3kg)","Carte des lieux (0.1kg)","Cartes à jouer (0.1kg)","Os (0.2kg)","Viande (1kg)","Poudre d'os (0.3kg)","Kit de réparation d'armure (1kg)","Fiole de poison (0.5kg)","Tente (10kg)","Kit de réparation d'arme (1kg)","Pied de biche (2kg)","Pioche (2.5kg)","Ingredient d'alchimie (0.1kg)","Bandage (0.5kg)","Torche (1kg)","Mouchoir (0.1kg)","m de Corde (1kg)","Lunette (0.1kg)","Parchemin (0.1kg)","Arme enchantée (3kg)","Armure enchantée (5kg)","Dague (0.5kg)","Poignard (0.5kg)","Masse d'arme (5kg)","Hachette (1.5kg)","Javelot (3kg)","Lance courte (3kg)","Épée courte (1kg)","Épée (1.5kg)","Sabre (1.5kg)","Gourdin (5kg)","Rapière (1.5kg)","Espadon (5kg)","Hache de bataille (5kg)","Hallebarde (3kg)","Baton (2kg)","Masse lourde (5kg)","Fléaux d'armes (5kg)","Lance lourde (5kg)","Épée à deux main (3kg)","Faux de guerre (3kg)","Fronde (0.5kg)","Javelot (3kg)","Arbalète de poing (1.5kg)","Arbalète (5kg)","Arc (1kg)","Arc long (1.5kg)","Bouclier (3kg)","Grand bouclier (5kg)","Tenue (1.5kg)","Gantelet de protection (1kg)","Pantalon (1kg)","Cuirasse (3kg)","Epaulette (3kg)","Plastron (3kg)","Armet (3kg)","Casque (3kg)","Chapeau (1kg)","Armure (10kg)","Epaulière (3kg)","Brassard (1kg)","Potion de soin (0.5kg)","Potion de PSY (0.5kg)","Bombe explosive (0.5kg)","Bombe poison (0.5kg)","Antidote (0.5kg)","Bélier portatif (17kg)","Boite d'allume-feu (0.1kg)","Piege à loup (.5kg)","Couteau de lancer (0.5kg)","Elexir de Psy (0.5kg)","Elexir de vie (0.5kg)","Kit de soin (1kg)","Ration de survie (1kg)","Parchemin de magie (0.1kg)","Potion de concentration (0.5kg)","Potion de force (0.5kg)","Potion d'agrandissement (0.5kg)","Potion de splendeur de l'aigle (0.5kg)","Potion de grâce féline (0.5kg)","Potion de saut (0.5kg)","Potion d'invisibilité (0.5kg)","Potion de résistance (0.5kg)","Potion de lévitation (0.5kg)","Potion de rapetissement (0.5kg)","Potion de résistance magique (0.5kg)","Potion de ralentissement (0.5kg)","Potion de délivrance (0.5kg)","Potion de lumière (0.5kg)","Potion de brouillard (0.5kg)","Potion de Poison (0.5kg)","Potion de sagesse du hibou (0.5kg)","Potion de vision nocturne (0.5kg)","Piece d'or (-kg)","Champignon (0.1kg)","Fleche (0.1kg)","Bijou (0.1kg)","Gourde d'eau (0.5kg)","Bouteille de vin (0.5kg)","Parchemin d'invocation (0.1kg)","Patte de lapin (0.1kg)","Soupe (0.5kg)"];   
		var nbitems = Math.floor((Math.random() * 5)+1);	
		var quantite ="";
		textgen +="Liste du butin :\r";
		for (i=0;i<nbitems;i++){
			var obj= items[Math.floor(Math.random()*items.length)];
			var quantite = Math.floor((Math.random() * 6)+1);
			
			textgen +="-"+quantite+" "+obj+"\r";
		}
		textgen +="```";
		message.reply(textgen)		
	}else if(message.content==='$aventure'){
		var textgen ="";
	    var items = ["Proche d'un bois sauvage et peu exploré","A proximité du QG actuel des joueurs","Tout autour d'un temple abandonné","A proximité d'une caverne ou une ancienne mine","Près d'un col montagneux","Prés d'un temple en ruine","Dans la grande capitale de Liber","Dans une auberge déserte","Dans une taverne bondée de monde","Prés d'un lac maudit","Prés de l'océan déchainé","A l'orée d'une forêt maudite","Près d'une vielle tour","Prés un village abandonné","Dans un champ de blé","Dans l'une des grandes villes","Prés d'un petit village","Dans une grotte","Au milieu de l'océan"];   
	    var items2 =["un lieu sacré a été profané","un innocent est accusé d'un crime qu'il n'a pas commis","des phénomènes magiques sont apparus à  proximité","une guerre civile s'est déclarée","un portail vers une autre dimension a été ouvert","une série de cambriolages a eu lieu","un individu important a été enlevé","une vielle carte est découverte","d'étrange disparition ont eu lieu","une épidémie fait rage","les marchands se font attaqué régulièrement","un trésor est volé","la fille d'un puissant chef de clan est kidnappé","les vestiges d'une cérémonie Demoniaque ont été découverts","un incendie a été déclaré","les morts quittent leur repos éternel et attaquent les environs","des monstres locaux se font plus nombreux.","des perturbations dans la magie se font sentir"];
	    var items3 = ["un mercenaire mystérieux","un simple paysan","un glorieux champion de vharung","le conseiller du chef de clan local","un chevalier à  la retraire","un prêtre","le leader d'une bande d'aventuriers","un ami des joueurs","un puissant chef de clan","un noble érudit","les gardes de la cité voisine","l'ordre des marchands","une jeune femme des plus charmante","l'un des leur","le clan du corbeau","la guide des mercenaires"];
	    var items4 = ["d'un escroc discret mais habile","d'un marchand peu scrupuleux","du gourou d'une secte","d'un noble mal intentionné","d'un illustre Demon","d'un dragon en maraude","d'un maître de guilde corrompu","d'une bande de brigand extrêmement organisé","d'un puissant magicien","d'un savant fou, manipulant la magie","de Demon isolé","d'un puissant seigneur Demoniaque","d'un clan draconique qui essaie de changer le cour de la guerre en sa faveur","des humains cherchant à  étendre leur influence","de monstre puissant en quête de nouveau territoire","d'un mystérieux ennemi","la Némésis d'un des joueurs"];

	    var lieu= items[Math.floor(Math.random()*items.length)];
	    var evenement = items2[Math.floor(Math.random()*items2.length)];
	    var personnage= items3[Math.floor(Math.random()*items3.length)];
	    var ennemi= items4[Math.floor(Math.random()*items4.length)];

	    textgen += lieu+", "+evenement+". Tu es appelés par "+personnage+" qui pense savoir que c'est l\'oeuvre "+ennemi+".";
	    message.reply(textgen)
	}

})



bot.login('NDQ3MDEwODkyMzcxMTk3OTcy.DehyPg.SpYHRQFrF-ZHR9ZUAKtW0-YOE_0')
//bot.user.setGame("$commande")
