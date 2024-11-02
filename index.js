#!/usr/bin/env node

import * as p from "@clack/prompts";
import { setTimeout } from "node:timers/promises";
import color from "picocolors";

class Question {
  constructor(question, answersArray) {
    this.question = question;
    this.answersArray = answersArray;
  }

  async ask() {
    const options = this.answersArray.map((answer) => {
      return {
        value: answer,
        label: answer,
      };
    });

    const s = p.spinner();
    s.start();
    await setTimeout(1000);
    s.stop();

    await p.select({
      message: this.question,
      initialValue: "1",
      options: options,
    });
  }
}

async function main() {
  p.intro(`${color.bgMagenta(color.black("Welcome to the Clack CLI!"))}`);

  const questions = [
    new Question("What is your name?", ["John", "Jane", "Doe"]),
    new Question("What is your favorite color?", ["Red", "Blue", "Green"]),
    new Question("What is your favorite animal?", ["Dog", "Cat", "Bird"]),
  ];

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const answer = await question.ask();
  }

  p.outro("Thank you for using the Clack CLI!");
}

main();
