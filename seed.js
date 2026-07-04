require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');

const testSchema = new mongoose.Schema({
  testId: { type: String, unique: true },
  questions: mongoose.Schema.Types.Mixed
});
const Test = mongoose.model('Test', testSchema);

async function seedTest(filename, varName) {
  try {
    const fileContent = fs.readFileSync('js/questions/' + filename, 'utf8');
    const cleanContent = fileContent.replace('const ' + varName + ' = ', 'return ').replace('let ' + varName + ' = ', 'return ');
    const questions = new Function(cleanContent)();

    await Test.deleteMany({ testId: varName });
    await Test.create({
      testId: varName,
      questions: questions
    });

    console.log(`Successfully seeded ${varName}!`);
  } catch (e) {
    console.log(`Error seeding ${varName}:`, e.message);
  }
}

async function seedAll() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB for Seeding");

    // await seedTest('gate-topicwise-test-1.js', 'gate_topicwise_test_1');
    // await seedTest('gate-topicwise-test-2.js', 'gate_topicwise_test_2');
    // await seedTest('cs-subjectwise-test-5.js', 'cs_subjectwise_test_5');

    console.log("All seeding finished!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedAll();
