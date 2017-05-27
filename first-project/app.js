new Vue({
	el: '#app',

	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		turns: []
	},

	methods: {
		startGame: function() {
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.turns = [];
		},

		attack: function() {
			var demage = this.calculateDemage(10, 3);
			this.monsterHealth -= demage;
			this.turns.unshift({
				isPlayer: true,
				text: 'Player hits Monster for ' + demage
			});
			if(this.checkWin()) {
				return;
			}
			this.monsterAttacks();
		},

		specialAttack: function() {
			var demage = this.calculateDemage(20, 10);
			this.monsterHealth -= demage;
			this.turns.unshift({
				isPlayer: true,
				text: 'Player hits Monster hard for ' + demage
			});
			if(this.checkWin()) {
				return;
			}
			this.monsterAttacks();
		},

		heal: function() {
			if(this.playerHealth <= 90) {
				this.playerHealth += 10;
			} else {
				this.playerHealth = 100;
			}
			this.turns.unshift({
				isPlayer: true,
				text: 'Player heals for 10'
			});
			this.monsterAttacks();
		},

		giveUp: function() {
			this.gameIsRunning = false;
		},

		monsterAttacks: function() {
			var demage = this.calculateDemage(12, 5);
			this.playerHealth -= demage;
			this.checkWin();
			this.turns.unshift({
				isPlayer: false,
				text: 'Monster hits Player for ' + demage
			});
		},

		calculateDemage: function(max, min) {
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},

		checkWin: function() {
			if(this.monsterHealth <= 0) {
				if(confirm('You won! New Game?')) {
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			} else if(this.playerHealth <= 0) {
				if(confirm('You lost! New Game?')) {
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			}
			return false;
		}
	}
})